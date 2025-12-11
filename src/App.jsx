import { useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
import { SideBar} from "./components/index.js";
import {Login} from "./pages/index.js"
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "./features/sessionSlice";
import { Outlet } from "react-router-dom";


export default function App() {

    const dispatch = useDispatch();
    const currentSession = useSelector((state) => state.session.session);

    useEffect(() => {
        // Check for existing session
        supabase.auth.getSession().then(({ data: { session } }) => {
            dispatch(setSession(session));
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            dispatch(setSession(session));
        });

        return () => subscription.unsubscribe();
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
    }

    return (
        <>
            {!currentSession ? (
                <Login login={login} />
            ) : (
                <section className="flex h-screen w-auto shadow-xl shadow-left shadow-blue-900/70">
                    <SideBar logout={logout} />
                    <Outlet />
                </section>
            )}
        </>
    );
}