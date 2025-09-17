

import { useSearchParams } from "react-router";
import BookingSection from "../components/booking";
import withAuth from "../components/hoc/with_auth.hoc";
import { Role } from "../interface/enum.types";
import ComponentTitle from "../components/common/component-title";

const BookPackage = () => {
  const location = useSearchParams();
  const name = location[0].get("name");

  return (
    <main className="px-36 mt-10">
      <ComponentTitle
        title={name || "Book Now"}
        sub_title={"Reserve Your Seat Now"}
      />

      {/* bookig section */}
      <BookingSection />
    </main>
  );
};

const Book = withAuth(BookPackage, [Role.USER]);

export default Book;
