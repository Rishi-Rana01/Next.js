import React from 'react'
import Script from 'next/script' // to run js in particular page

const contact = () => {
  return (
    <div>
        <Script>
            {`alert("This is contact Page....")` }
        </Script>
      Contact
    </div>
  )
}

export default contact
export const metadata = {
  title: "Contact- Connect with world",
  description: "This is Facebook...",
};
