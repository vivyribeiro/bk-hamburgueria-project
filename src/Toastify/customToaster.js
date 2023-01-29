import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toaster = (message, customIcon, type) => {
	toast(message, {
		type,
		icon: customIcon ? customIcon : true,
		position: "top-center",
		autoClose: 2000,
		draggable: false
	});
};
