import React, { useContext, useState } from "react";
import Header from "../website/Header";
import Footer from "../website/Footer";
import SidebarFilters from "../Categories/SideBar";
import CustomBreadCrumb from "../../../util/BreadCrumb";
import { WindowSize } from "../../../context/WindowContext";
import PhoneSideBar from "../Categories/PhoneSideBar";
import { Button } from "primereact/button";
import ViewProducts from "./ViewProducts";

const Products = () => {
  const { windowSize } = useContext(WindowSize);
  const [showPhoneSidebar, setShowPhoneSidebar] = useState(false);

  return (
    <>
      <Header />
      <div className="p-4">
        <CustomBreadCrumb />
      </div>

      {windowSize < 768 && (
        <>
          <div className="flex justify-end px-4">
            <Button
              icon="pi pi-filter"
              label="Filter"
              onClick={() => setShowPhoneSidebar(true)}
              className="p-button-sm p-button-outlined"
            />
          </div>
          <PhoneSideBar
            visible={showPhoneSidebar}
            onHide={() => setShowPhoneSidebar(false)}
          />
        </>
      )}

      <div className="grid mt-4" style={{ minHeight: "calc(100vh - 140px)" }}>
        {windowSize >= 768 && (
          <div
            className="col-fixed"
            style={{
              width: "300px",
            }}
          >
            <SidebarFilters />
          </div>
        )}

        <div className="col" style={{ overflowY: "auto" }}>
          <ViewProducts />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
