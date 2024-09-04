export const getService = async () => {
    const res = await fetch("http://localhost:3000/services/api/getAll");
    const data = res.json();
    return data;
}
export const getServiceDetails = async (id) => {
    const res = await fetch(`http://localhost:3000/services/api/${id}`);
    const data = res.json();
    return data;
}