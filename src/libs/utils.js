import toast from "react-hot-toast";

export class Notification {
  normal(message, position = "top-left") {
    toast.success(message, {
      duration: 5000,
      position,
      style: {
        background: "#E4F0E9",
        color: "#26A956",
      },
    });
  }

  warning(message, position = "top-left") {
    toast(message, {
      duration: 5000,
      position,
      style: {
        background: "#FEFCE9",
        color: "#CF941A",
      },
    });
  }

  critical(message, position = "top-left") {
    toast.error(message, {
      duration: 5000,
      position,
      style: {
        border: "0.5px solid #DD2F2F",
        background: "#FEF3F3",
        color: "#DD2F2F",
      },
    });
  }
}
