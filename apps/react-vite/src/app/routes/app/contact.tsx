import { QueryClient } from '@tanstack/react-query';

import { ContentLayout } from '@/components/layouts';
import { getUsersQueryOptions } from '@/features/users/api/get-users';
import { UsersList } from '@/features/users/components/users-list';
import { Authorization, ROLES } from '@/lib/authorization';

export const clientLoader = (queryClient: QueryClient) => async () => {
  const query = getUsersQueryOptions();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const ContactRoute = () => {
  return (
    <ContentLayout title="Contacts">
      <div>Contacts page</div>
    </ContentLayout>
  );
};

export default ContactRoute;