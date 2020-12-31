import React from "react";
import { Typography, Link } from '@material-ui/core';

export default function Copyright() {
  return (
    <Typography variant="body2" color="light" align="center">
      {'Copyright © '}
      <Link color="secondary" href="https://www.lauratannahill.com/">
        Laura Tannahill
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}