import { ThemeProvider, CssBaseline } from '@material-ui/core';
import React from 'react';

export default function Layout({
	children,
	commercePublicKey,
	title = 'CoolShop',
}) {
	return (
		<React.Fragment>
			<Head>
				<meta charSet="utf-8" />
				<title>{`${title} - Coolshop`}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, shrink-to-fit=no" 
        />
			</Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider> 
		</React.Fragment>
	);
}
