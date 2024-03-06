import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const lat = 40.4165;
        const lon= -3.7026;

        const url =`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`

        const res = await axios.get(url);

        return NextResponse.json(res.data);
    } catch (error) {
        console.log("Error fetching pollusion data");

        return new Response("Error fetching pollusion data", {status: 500});
    }
}