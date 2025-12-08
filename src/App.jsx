import { useState, useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
import SideBar from "./components/SideBar";
import AllChats from "./components/AllChats";
import Chats from "./components/Chats";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "./features/sessionSlice";


export default function App() {
    
    const dispatch = useDispatch();
    const currenSession = useSelector((state) => state.session.session);


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
    }, []);

    // login handler
    const login = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
    }

    // logout handler
    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        {
            error && <div className="text-red-500">
                {error.message}
            </div>
        }
    }

    return (
        <>
            {!currenSession ? (
                <Login login={login} session={currenSession} />
            ) : (
                <section className="flex  h-screen w-auto shadow-xl shadow-left shadow-blue-900/70">
                    <SideBar logout={logout} />
                    <AllChats />
                    <Chats />

                </section>
            )}
        </>
    );
}