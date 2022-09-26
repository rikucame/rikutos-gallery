import * as React from "react";
import { BaseLayout } from "../components/Layout/BaseLayout";
import { Catalog as CatalogList } from "../components/Pages/Catalog";

const catalog: CatalogItemsProps = [
  {
    title: "Genre",
    links: [
      { name: "Portrait", path: "/photos/01_portrait" },
      { name: "Snap", path: "/photos/02_snap" },
      { name: "Mood", path: "/photos/03_mood" },
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

const Catalog: React.VFC = () => (
  <BaseLayout>
    <CatalogList catalog={catalog} />
  </BaseLayout>
);

export default Catalog;