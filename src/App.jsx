import { useState, useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
import SideBar from "./components/SideBar";
import AllChats from "./components/AllChats";
import Chats from "./components/Chats";
import Login from "./pages/Login";

export default function App() {

    const [session, setSession] = useState([]);

    console.log(session);


    useEffect(() => {
        // Check for existing session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
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
    }

    return (
        <>
            <section className="flex  h-screen w-auto shadow-xl shadow-left shadow-blue-900/70">
               
               <Login login={login} />
                {/* <SideBar />
                <AllChats />
                <Chats /> */}
            </section>
        </>
    );
}