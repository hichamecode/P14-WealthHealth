import { toast } from 'react-toastify';

function showToastSuccess(message: string, isDarkMode: boolean) {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: false,
    theme: isDarkMode ? "dark" : "light",
  });
}

function showToastError(message: string, isDarkMode: boolean) {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: false,
    theme: isDarkMode ? "dark" : "light",
  });
}

function showToastPending(message: string, isDarkMode: boolean) {
  toast.info(message, {
    position: "top-center",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: false,
    theme: isDarkMode ? "dark" : "light",
  })
}

export { showToastSuccess, showToastError, showToastPending };

