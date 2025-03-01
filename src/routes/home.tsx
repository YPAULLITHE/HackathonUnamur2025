import React from "react"
import Greeter from "../components/greeter"

export default function Home() {
  return (
    <div className="h-full p-4">

        <ul className="list bg-base-100 rounded-box shadow-md">
        
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Participation Leaderboard</li>
          <div className="flex gap-4 items-center justify-center ">
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
            <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
            <div className="list-col-grow">
              <div>Dio Lupa</div>
              <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
            </button>
          </li>
          
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
            <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
            <div className="list-col-grow">
              <div>Ellie Beilish</div>
              <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
            </button>
          </li>
          
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
            <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
            <div className="list-col-grow">
              <div>Sabrino Gardener</div>
              <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
            </button>
          </li>
          </div>
        
        </ul>

        <div className="flex gap-4 items-center justify-center">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}
