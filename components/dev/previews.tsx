import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import {ContactMe} from "@/components/ContactMe";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/ContactMe">
        <ContactMe/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
