import { connectDB } from "@/lib/connectDB";

export const POST = async(request) => {
    const booking = await request.json();
    const db = await connectDB();
    const bookingCollections = db.collection("bookings");

    try {
        const newBooking = bookingCollections.insertOne(booking);
        return Response.json({ message: "Booking added successfully" })

    } catch (error) {
        console.log(error)
    }
}