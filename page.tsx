import React from 'react'
import Header from '../xyz/page'

import Image from 'next/image'
 
export default function Page() {
    const imageStyle = {
        borderRadius: '10%',
        border: '7px solid black',
        

    }

    return (
      <>
<Header />
<br />
<p className="text-5xl font-bold text-slate-500 hover:text-blue-600">This is a producs Page</p><br />
<p className="text-3xl font-bold text-green-500 hover:text-pink-600">Hear is our products!</p><br />


<div className="div1">Product 1
<h1>For Faizan Ahmed</h1>
        <Image
            src="/h.png"
            width={400}
            height={400}
            alt="Flower Image"
            style={imageStyle}
        />
price:
</div>
<div className="div2">Product 2
<h1>For Usman Ahmed</h1>
        <Image
            src="/h.png"
            width={400}
            height={500}
            alt="Flower Image"
            style={imageStyle}
        />
price:
</div>
<div className="div3">Product 3
<h1>For Arsalan Ahmed</h1>
        <Image
            src="/h.png"
            width={400}
            height={400}
            alt="Flower Image"
            style={imageStyle}
        />
price:
</div>


<div className="div1">Product 1
<h1>For Faizan Ahmed</h1>
        <Image
            src="/h.png"
            width={400}
            height={400}
            alt="Flower Image"
            style={imageStyle}
        />
price:
</div>
<div className="div2">Product 2
<h1>For Usman Ahmed</h1>
        <Image
            src="/h.png"
            width={400}
            height={500}
            alt="Flower Image"
            style={imageStyle}
        />
price:
</div>
<div className="div3">Product 3
<h1>For Arsalan Ahmed</h1>
        <Image
            src="/h.png"
            width={400}
            height={400}
            alt="Flower Image"
            style={imageStyle}
        />
price:
</div>



<div className="div1">Product 1
<h1>For Faizan Ahmed</h1>
        <Image
            src="/h.png"
            width={400}
            height={400}
            alt="Flower Image"
            style={imageStyle}
        />
price:
</div>
<div className="div2">Product 2
<h1>For Usman Ahmed</h1>
        <Image
            src="/h.png"
            width={400}
            height={500}
            alt="Flower Image"
            style={imageStyle}
        />
price:
</div>
<div className="div3">Product 3
<h1>For Arsalan Ahmed</h1>
        <Image
            src="/h.png"
            width={400}
            height={400}
            alt="Flower Image"
            style={imageStyle}
        />
price:
</div>


      </>
    )
}