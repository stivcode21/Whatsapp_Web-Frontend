import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function FooterPriv() {
    return (
        <footer className="flex justify-center items-center pb-2 gap-1">
            <LockOutlinedIcon sx={{ color: "grey.medium", fontSize: "12px" }} />
            <p className="text-grey-medium text-center text-xs">
                Tus mensajes personales están{" "}
                <span className="text-green-main">
                    cifrados de extremo a extremo.
                </span>
            </p>
        </footer>
    )
}