import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToaster = (message, customIcon) => {
	toast.success(message, {
		icon: customIcon ? customIcon : true,
		position: "top-center",
		autoClose: 2000,
		draggable: false
	});
};

export const errorToaster = (message, customIcon) => {
	toast.error(message, {
		icon: customIcon ? customIcon : true,
		position: "top-center",
		autoClose: 2000,
		draggable: false
	});
};

export const warningToaster = (message, customIcon) => {
	toast.warn(message, {
		icon: customIcon ? customIcon : true,
		position: "top-center",
		autoClose: 2000,
		draggable: false
	});
};

export const infoToaster = (message, customIcon) => {
	toast.info(message, {
		icon: customIcon ? customIcon : true,
		position: "top-center",
		autoClose: 2000,
		draggable: false
	});
};
