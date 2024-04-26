import districts from './bd-districts.json';

// Get all districts list route contoller 
export async function GET(){
    return Response.json(districts.districts);
}