import { Box } from "@mui/material";

export const SiteBannerEnabled = true;
export const SiteBannerURL = "https://docs.google.com/forms/d/e/1FAIpQLSfqR-4fS9MlqjhgYmdDcrGqEkGccA_8MJoRXevYO1xJoXSkTA/viewform";
export const SiteBannerText = "Apply for the Google Cloud DORA Awards!";

/**
 * SiteBanner component.
 *
 * This component renders a banner at the top of the page,
 * which can be used to display important announcements or calls to action.
 *
 * The banner is controlled by the following variables:
 *
 * - `SiteBannerEnabled`: A boolean value that determines whether the banner is displayed.
 * - `SiteBannerURL`: The URL that the banner links to.
 * - `SiteBannerText`: The text that is displayed in the banner.
 *
 * @returns {JSX.Element} The SiteBanner component.
 */
export const SiteBanner = () => {
  if (!SiteBannerEnabled) {
    return ""; // Return an empty string when disabled
  }

  return (
    <Box
      sx={{
        backgroundColor: "#fde293",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <>
        <a href={`${SiteBannerURL}`} target="_blank">{SiteBannerText}</a>
      </>
    </Box>
  );
};
