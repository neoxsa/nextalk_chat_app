import { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";
import { SideBar} from "./components/index.js";
import {Login} from "./pages/index.js"
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "./features/sessionSlice";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { Toaster, toast } from "sonner";


export default function App() {

    const dispatch = useDispatch();
    const currentSession = useSelector((state) => state.session.session);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for existing session
        supabase.auth.getSession().then(({ data: { session } }) => {
            dispatch(setSession(session));
            setIsLoading(false);
        })
        .catch((err) => {
            console.error("Error getting session:", err);
            setIsLoading(false);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            dispatch(setSession(session));
            setIsLoading(false);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [dispatch]);

    // login handler
    const login = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
    }

    // logout handler
    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        
        if (error) {
            toast.error("Something went wrong");
        }
    }

    // Show loading state while checking session
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen w-full">
                <div className="text-amber-50">Loading...</div>
            </div>
        );
    };

    // Handle /login route 
    if (location.pathname === "/login") {
        if (currentSession) {
            return <Navigate to="/" replace />;
        }
        return <Login login={login} />
    };

    // If no session
    if (!currentSession) {
        return <Navigate to="/login" replace />;
    };

    // User is authenticated, show main app
    return (
        <>
            <section className="flex h-screen w-auto shadow-xl shadow-left shadow-blue-900/70">
                <Toaster
                    theme="dark"
                />
                <SideBar logout={logout} />
                <Outlet />
            </section>
        </>
    );
}