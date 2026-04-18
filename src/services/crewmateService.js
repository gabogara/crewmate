import { supabase } from "../lib/supabaseClient";

const getAllCrewmates = async () => {
  const { data, error } = await supabase
    .from("crewmates")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

const getCrewmateById = async (id) => {
  const { data, error } = await supabase
    .from("crewmates")
    .select("*")
    .eq("id", id)
    .single();

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

const updateCrewmate = async (id, updatedCrewmate) => {
  const { data, error } = await supabase
    .from("crewmates")
    .update(updatedCrewmate)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

const deleteCrewmate = async (id) => {
  const { error } = await supabase.from("crewmates").delete().eq("id", id);

  if (error) throw error;
};

export {
  getAllCrewmates,
  createCrewmate,
  getCrewmateById,
  updateCrewmate,
  deleteCrewmate,
};
