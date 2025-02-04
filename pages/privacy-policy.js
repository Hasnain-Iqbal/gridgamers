export default function Home({ privacyPolicy }) {
  console.log({ privacyPolicy });
  return (
    <div className="xs:px-0 md:px-20 3xl:px-0  xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl  2xl:max-w-screen-2xl   py-0 md:py-16  mt-[40px] lg:mt-24 mx-auto">
    <p className="  text-center text-[#298be1] font-semibold  mt-[24px] leading-10	 xs:text-[18px]  lg:text-[32px]">
        Privacy Policy
      </p>
      <div
        className="text-[#fff] text-justify"
        dangerouslySetInnerHTML={{ __html: privacyPolicy }}
      />
    </div>
  );
}
export async function getStaticProps() {
  // Call the fetch method and passing
  // the pokeAPI link
  const response = await fetch(
    "https://hubapi.gridgamers.com/api/v1/setting/privacypolicy-termscondition?SubCatagoryId=12"
  );

  // Parse the JSON
  const data = await response?.json();

  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { privacyPolicy: data?.response.subCategoryDescription },
  };
}
