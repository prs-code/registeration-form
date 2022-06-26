import {toast } from 'react-toastify';

 export const notify = (text, type) => {
    if (type === "success") {
        toast.success(text,{
            theme: "dark",
        })
    } else {
        toast.error(text,{
            theme: "dark",
        })
    }
}


