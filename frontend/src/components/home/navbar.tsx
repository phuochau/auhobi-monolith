import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="w-full flex items-center p-24">
      <div className="flex-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOXiSvIzXz6n_pT2Mj-JJi4rnf2q_js8Ycw&s" width={64} height={64} alt="logo"/>
      </div>
  
      <div className="flex items-center">
        <Button className="hidden md:block ml-2 mr-2">Get Early Access</Button>
      </div>
    </div>
  );
};