import useGetToken from "@/hooks/useGetToken";
import { useGetUserAddressByIdQuery } from "@/services/shoperzApi.service";
import React from "react";

type Props = {
  addressId: string | undefined;
};
function OrderAddress({ addressId }: Props) {
  const { token } = useGetToken();
  const { data, isSuccess } = useGetUserAddressByIdQuery({
    id: addressId,
    token,
  });
  console.log(data);
  return (
    <div>
      <ul>
        <li>{isSuccess && JSON.stringify(data)}</li>
      </ul>
    </div>
  );
}

export default OrderAddress;
