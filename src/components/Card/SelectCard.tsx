import { Card as MuiCard, CardContent, CardMedia, Checkbox, Stack, Typography } from "@mui/material"
import { FC, useState } from "react"

export interface MuiCardProps {
  thumbnail: string
  label: string
  onClick: (event: { value: boolean; label: string }) => void
}

const labelCheckbox = { inputProps: { "aria-label": "Checkbox demo" } }

const SelectCard: FC<MuiCardProps> = ({ thumbnail, label, onClick }) => {
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    setChecked(!checked)
    onClick && onClick({ value: checked, label })
  }

  return (
    <MuiCard sx={{ width: 229, ...(checked && { boxShadow: "0px 0px 0px 2px #65e9d9", border: 0 }) }} onClick={handleClick}>
      {thumbnail && <CardMedia component="img" height={100} image={thumbnail} alt="thumbnail" />}
      {label && (
        <CardContent sx={{ p: "8px !important" }}>
          <Stack direction={["row"]} alignItems="center">
            <Checkbox checked={checked} onClick={handleClick} {...labelCheckbox} />
            <Typography sx={{ color: "rgba(0, 0, 0, 0.87)" }}>{label}</Typography>
          </Stack>
        </CardContent>
      )}
    </MuiCard>
  )
}

export default SelectCard
