import { Button } from "@/components/ui/button";
import Link from "next/link";
//Created a Landing page so every user  whether they are logged in or not will land on this page!

// landing page-> used when you want to create some platform where user that are not logged in can see the content that is free 
// and if they want to see the content that is paid then they have to login or register first!
const LandingPage = () => {
    return(
        <div>
            Landing Page(Unprotected)
            <div>
            <Link href="/sign-in">
                <Button>
                    login
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button>
                    Register
                </Button>
            </Link>
            </div>
        </div>

    );
}
export default LandingPage;