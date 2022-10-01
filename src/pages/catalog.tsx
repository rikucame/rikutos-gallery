import * as React from "react";
import { BaseLayout } from "../components/Layout/BaseLayout";
import { useLocation } from "@reach/router";
import { generateSeo } from "../components/Utils/GenerateSeo";
import { Catalog as CatalogList } from "../components/Pages/Catalog";

const catalog: CatalogItemsProps = [
  {
    title: "Genre",
    links: [
      { name: "Portrait", path: "/photos/portrait" },
      { name: "Mood", path: "/photos/mood" },
      { name: "Snap", path: "/photos/snap" },
    ],
  },
  {
    title: "Theme",
    links: [{ name: "Coming soon", path: "/catalog" }],
  },
];

export type CatalogItemsProps = {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
}[];

const Catalog: React.VFC = () => {
  return (
    <BaseLayout seo={generateSeo(useLocation())}>
      <CatalogList catalog={catalog} />
    </BaseLayout>
  );
};

export default Catalog;
