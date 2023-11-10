import { NavigationLink } from './NavigationLink';

export function LinksList() {
  return (
    <>
      <NavigationLink id='home' href='/feed'>
        Home
      </NavigationLink>
      <NavigationLink id='network' href='/network'>
        Network
      </NavigationLink>
      <NavigationLink id='jobs' href='/jobs'>
        Jobs
      </NavigationLink>
      <NavigationLink id='chat' href='/chat'>
        Chat
      </NavigationLink>
      <NavigationLink id='user' href='/user'>
        User
      </NavigationLink>
      <NavigationLink id='post' href='/post-job'>
        Post a job
      </NavigationLink>
    </>
  );
}
