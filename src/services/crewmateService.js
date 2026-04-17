import { supabase } from "../lib/supabaseClient";

const getAllCrewmates = async () => {
  const { data, error } = await supabase
    .from("crewmates")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export { getAllCrewmates };
