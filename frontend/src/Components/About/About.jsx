import React from "react";

const About = () => {
    return(
        <div className="md:w-[89%] bg-[#1A191E] px-3 md:px-0 py-5 md:py-11 md:ml-[20.3%]">
            <div className="pt-[3rem] flex">
            <input className="w-[23rem] h-11 border-2 border-white bg-[#1A191E] px-5 " type="text" placeholder="Search here" />
            <button className="w-[5rem] h-11 border-2 border-white bg-[#1A191E] hover:bg-red-500 ml-[-3px] hover:border-red-500 text-white text-[1.2rem]  "><ion-icon name="search"></ion-icon></button>
            </div>
            <div className="md:w-[51rem] px-5 md:px-0 mt-11 flex-col ">
                <img  src="https://demo.themefisher.com/galaxy-bootstrap/images/author.png" alt="about" />
                <h1 className="text-[2rem] text-left mt-5 font-semibold text-white leading-11">
                    Hi,I’m Alexender Xanidiver Specilized In Blog Writing And Colecting
                </h1>
                <p className="text-left  text-white mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus cum cursus nunc nec velit volutpat consequat. Vitae dui, massa viverra nam dui laoreet ipsum. Sagittis sed feugiat blandit adipiscing mauris. Facilisis dictum in tellus ac turpis. Pretium, facilisis turpis duis pulvinar blandit est. Dolor accumsan pellentesque ullamcorper volutpat urna arcu. Nisi nulla et mauris et, ultricies odio semper gravida. Justo, lorem leo ullamcorper leo ornare phasellus. Dolor tristique sem quam eget tempor aliquet sem amet, eget. Vitae id mattis consectetur gravida sit lorem donec. Phasellus enim sodales congue varius arcu et, pulvinar ultrices. Faucibus nulla massa erat ut. Egestas integer pharetra proin pellentesque tellus quis pulvinar mauris. Sed quisque pellentesque platea vel. Proin felis tellus nunc risus tortor, nibh. Vulputate mauris fermentum tincidunt diam sed. Vel interdum nisl, pellentesque ante consectetur. At praesent lorem placerat nibh nunc. Massa lectus id et amet quam venenatis, in mus. Arcu cras risus est porttitor tincidunt posuere feugiat. Sem velit ornare id duis Amet nullam eget mus diam nisl, vel. Sed at id quam bibendum lacus felis. Porta arcu, nunc ultricies
                </p>
            </div>
            <div className="md:w-[51rem] px-5 md:px-0 mt-11 flex-col ">
                <h1 className="text-[2rem] text-left mt-5 font-semibold text-white leading-10">
                I’m on a mission to change how software is made by peoples of republic
                </h1>
                <ul role="list" className="marker:text-red-500 list-disc md:pl-7 space-y-3 text-white mt-11">
                    <li className=" text-[1.3rem] md:text-[1.7rem]"><p className="text-[1.7rem] ml-[10px] text-left ">Building software shouldn't be so hard</p></li>
                    <p className="text-left  text-white mt-5 ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor erat.</p>
                </ul>
                <ul role="list" className="marker:text-red-500 list-disc md:pl-7 space-y-3 text-white mt-11">
                    <li className=" text-[1.3rem] md:text-[1.7rem]"><p className="text-[1.7rem] ml-[10px] text-left">Building software shouldn't be so hard</p></li>
                    <p className="text-left  text-white mt-5 ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor erat.</p>
                </ul>
                <ul role="list" className="marker:text-red-500 list-disc md:pl-7 space-y-3 text-white mt-11">
                    <li className=" text-[1.3rem] md:text-[1.7rem]"><p className="text-[1.7rem] ml-[10px] text-left">Building software shouldn't be so hard</p></li>
                    <p className="text-left  text-white mt-5 ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor erat.</p>
                </ul>
                
                <ul role="list" className="marker:text-red-500 list-disc md:pl-7 space-y-3 text-white mt-11">
                    <li className="text-[1.3rem]"><p className="text-[1.7rem] ml-[10px] text-left">Building software shouldn't be so hard</p>
                        <ol role="list decimal" className=" marker:list-white list-decimal md:pl-7 space-y-3 text-white mt-11">
                            <li className="text-[1rem]"><p className="  text-left">Sll the Themefisher items are designed to be with the latest , We check all.</p></li>
                            <li className="text-[1rem]"><p className="  text-left">Sll the Themefisher items are designed to be with the latest , We check all.</p></li>
                            <li className="text-[1rem]"><p className="  text-left">Sll the Themefisher items are designed to be with the latest , We check all.</p></li>
                            <li className="text-[1rem]"><p className="  text-left">Sll the Themefisher items are designed to be with the latest , We check all.</p></li>
                            <li className="text-[1rem]"><p className="  text-left">Sll the Themefisher items are designed to be with the latest , We check all.</p></li>
                        </ol>
                    </li>
                    
                </ul>
            </div>

        </div>
    )
}

export default About;