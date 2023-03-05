import React from "react";
import { CgPhone } from "react-icons/cg";

const ExtraServices = () => {
    const extraServices = [
        {
            id: 1,
            name: 'ROOM CLEANING',
            price: 50,
            work1:''
        }
    ]
  return (
    <div className="flex justify-between items-center">
      <div className="lg:w-1/3 p-6">
        <p className="text-xs mb-6 tracking-[.50em]"> Best Prices</p>
        <h1 className="lg:text-5xl text-3xl my-6 text-primary">Extra Services</h1>
        <p className="leading-7 mb-4">
          The best prices for your relaxing vacation. The utanislen quam
          nestibulum ac quame odion elementum sceisue the aucan.
        </p>
        <p>
          Orci varius natoque penatibus et magnis disney parturient monte
          nascete ridiculus mus nellen etesque habitant morbine.
        </p>

        <div className="mt-6 flex items-center gap-x-2">
          <CgPhone size="45px" color="#a87932" />
          <div>
            <p>For Any Need</p>
            <p> +90877666</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 p-6">
        <p className="text-xs mb-6 tracking-[.50em]"> Best Prices</p>
        <h1 className="lg:text-5xl text-3xl my-6">Extra Services</h1>
        <p className="leading-7 mb-4">
          The best prices for your relaxing vacation. The utanislen quam
          nestibulum ac quame odion elementum sceisue the aucan.
        </p>
        <p>
          Orci varius natoque penatibus et magnis disney parturient monte
          nascete ridiculus mus nellen etesque habitant morbine.
        </p>
      </div>
    </div>
  );
};

export default ExtraServices;
