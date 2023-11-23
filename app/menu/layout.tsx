import "../../app/menu/globalsMenu.scss";
import MenuinMenuComponent from "@/components/MenuinMenu";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="menuConteiner">
      <MenuinMenuComponent />
      {children}
    </div>
  );
}
