import { supabase } from './supabaseClient';

// List chats the user is in
export async function getUserChats(userId) {
  const { data, error } = await supabase
    .from('chat_participants')
    .select(`
      chat_id,
      chats (
        id,
        name,
        created_at
      )
    `)
    .eq('user_id', userId);

  if (error) throw error;
  return data ?? [];
}

// Create a chat with given participant IDs (include yourself)
export async function createChat(participantIds, name = null) {
  const { data: chat, error: chatError } = await supabase
    .from('chats')
    .insert({ name })
    .select()
    .single();
  if (chatError) throw chatError;

  const participants = participantIds.map((userId) => ({
    chat_id: chat.id,
    user_id: userId,
  }));

  const { error: participantsError } = await supabase
    .from('chat_participants')
    .insert(participants);
  if (participantsError) throw participantsError;

  return chat;
}

// List messages for a chat
export async function getChatMessages(chatId) {
  const { data, error } = await supabase
    .from('messages')
    .select(`
      id,
      chat_id,
      sender_id,
      content,
      created_at,
      profiles (
        full_name,
        avatar_url
      )
    `)
    .eq('chat_id', chatId)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

// Send a message to a chat
export async function sendMessage(chatId, senderId, content) {
  const { data, error } = await supabase
    .from('messages')
    .insert({
      chat_id: chatId,
      sender_id: senderId,
      content,
    })
    .select(`
      id,
      chat_id,
      sender_id,
      content,
      created_at,
      profiles (
        full_name,
        avatar_url
      )
    `)
    .single();

  if (error) throw error;
  return data;
}