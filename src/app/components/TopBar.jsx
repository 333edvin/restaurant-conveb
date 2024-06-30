import React from 'react'

function TopBar() {
  return ( 
    <div className="topbar px-3 py-2 border-b-0.5"  >
  <div className="container flex  justify-between text-sm">
    <div className='flex justify-between gap-10'>

    <address >
      
        <span className="span">
        Restaurant St, Delicious City, London 9578, UK
        </span>
      </address>
      <div className="topbar-item item-2">
      
      <span className="span">Daily : 8.00 am to 10.00 pm</span>
      </div>
    </div>

    <div className='flex justify-between gap-10'>
    <a href="tel:+11234567890" className="topbar-item link">
      
      <span className="span">+1 123 456 7890</span>
    </a>
    <div className="separator" />
    <a href="mailto:booking@restaurant.com" className="topbar-item link">
      
      <span className="span">booking@restaurant.com</span>
    </a>
  </div>
    </div>
</div>

  )
}

export default TopBar