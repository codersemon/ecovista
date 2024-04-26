import districts from "../bd-districts.json";

// Get single district contoller
export async function GET(req, { params }) {
  const district = districts.districts.find(
    (district) => district.name.toLowerCase() == params.name.toLowerCase()
  );

  if (district) {
    return Response.json(district);
  }

  // if district not found then return null
  return Response.json(null);
}
