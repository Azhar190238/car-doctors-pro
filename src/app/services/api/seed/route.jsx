import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services";

export const GET = async () => {
    const db = await connectDB();
    const serviceCollection = db.collection("services");

    try {
        await serviceCollection.deleteMany();
        const resp = serviceCollection.insertMany(services);
        return Response.json({ message: "services added successfully" })

    } catch (error) {
        console.log(error)
    }

}