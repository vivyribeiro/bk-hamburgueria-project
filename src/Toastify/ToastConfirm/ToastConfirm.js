import React from "react";
import { toast } from "react-toastify";

import "./style.css";

const Msg = ({ closeToast, confirmAction, text }) => (
	<div className="toast__Content">
		<span>{text}</span>
		<div className="toast__Buttons">
			<button onClick={closeToast}>Fechar</button>
			<button onClick={confirmAction}>Confirmar</button>
		</div>
	</div>
);

export const ToastConfirm = (confirmAction, message) =>
	toast(<Msg text={message} confirmAction={confirmAction} />, {
		position: "top-center",
		autoClose: false,
		draggable: false,
		hideProgressBar: false,
		pauseOnHover: true
	});
