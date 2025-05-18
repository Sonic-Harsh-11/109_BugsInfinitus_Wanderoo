/*
import OpenAI from 'npm:openai@4.28.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const openai = new OpenAI({
      apiKey: Deno.env.get('OPENAI_API_KEY'),
    });

    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful travel assistant. Help users plan their trips, suggest destinations, and provide travel tips.',
        },
        { role: 'user', content: message },
      ],
    });

    const response = completion.choices[0].message;

    return new Response(
      JSON.stringify({ message: response.content }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  }
});*/

// supabase/functions/map-autocomplete/index.ts
import { serve } from "https://deno.land/std/http/server.ts";

const OLA_API_KEY = Deno.env.get("qTWIsBDFxonM3bkF8Uoj1Q3M1GCfelTA9T5KW9a4");

serve(async (req) => {
  const url = new URL(req.url);
  const input = url.searchParams.get("input");

  if (!input) {
    return new Response(JSON.stringify({ error: "Missing input" }), { status: 400 });
  }

  const olaRes = await fetch(
    `https://api.olamaps.io/places/v1/autocomplete?input=${encodeURIComponent(input)}&api_key=${OLA_API_KEY}`
  );
  const data = await olaRes.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
});
