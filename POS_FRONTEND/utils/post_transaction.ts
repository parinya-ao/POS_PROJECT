import { useAppConfig } from "#app";
import axios from "axios";

const post_transaction = async(item_id : number, quantity: number) => {
    const config = useAppConfig()
    const {data} = await 
}