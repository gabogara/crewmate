import { supabase } from "../lib/supabaseClient";

const getAllCrewmates = async () => {
  const { data, error } = await supabase
    .from("crewmates")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

const createCrewmate = async (crewmate) => {
  const { data, error } = await supabase
    .from("crewmates")
    .insert([crewmate])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export { getAllCrewmates, createCrewmate };
