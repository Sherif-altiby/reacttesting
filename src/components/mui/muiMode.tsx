import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const MuiMode = () => {
    const them = useTheme();

    return <Typography component={"h1"} > {them.palette.mode} mode </Typography>
}