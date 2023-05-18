import React, { memo, useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";

const AppLink = forwardRef((props, ref) => {
  const { to, as, children, className, onClick, ...otherProps } = props;

  const nextRouter = useMemo(() => to || "#", [to]);
  const urlOnBrowser = useMemo(() => as, [as]);

  return (
    <Link href={nextRouter} as={urlOnBrowser} passHref={true}>
      <MuiLink
        underline="none"
        ref={ref}
        onClick={onClick}
        {...otherProps}
        component="span"
      >
        {children}
      </MuiLink>
    </Link>
  );
});

AppLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  as: PropTypes.string,
  onClick: PropTypes.func,
};
AppLink.defaultProps = {};
AppLink.displayName = "AppLink";

export default memo(AppLink);
