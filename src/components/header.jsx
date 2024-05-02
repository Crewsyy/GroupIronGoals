import React from 'react'

const Header = () => {
  return (
    <div className="navbar bg-base-300 z-50 fixed">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Group Iron Gaming</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-lg menu-horizontal px-4 ">
          <li>
            <a>Gains</a>
          </li>
          <li>
            <details>
              <summary>Goals</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>SG Gilly</a>
                </li>
                <li>
                  <a>SG Crewsy</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header