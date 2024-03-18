/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';
// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
    'Ekelsia.html',
    './', // Alias for index.html
    'Eklesia.css',
    '../../styles/main.css',
    'demo.js'
];
// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
    //@ts-ignore
    event.waitUntil(caches.open(PRECACHE)
        .then(cache => cache.addAll(PRECACHE_URLS))
        //@ts-ignore
        .then(self.skipWaiting()));
});
// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    //@ts-ignore
    event.waitUntil(caches.keys().then(cacheNames => {
        //@ts-ignore
        return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
        return Promise.all(cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete);
        }));
        //@ts-ignore
    }).then(() => self.clients.claim()));
});
// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
    // Skip cross-origin requests, like those for Google Analytics.
    //@ts-ignore
    if (event.request.url.startsWith(self.location.origin)) {
        //@ts-ignore
        event.respondWith(
        //@ts-ignore
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return caches.open(RUNTIME).then(cache => {
                //@ts-ignore
                return fetch(event.request).then(response => {
                    // Put a copy of the response in the runtime cache.
                    //@ts-ignore
                    return cache.put(event.request, response.clone()).then(() => {
                        return response;
                    });
                });
            });
        }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL3N3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHO0FBRUgsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSwyQ0FBMkM7QUFDM0MsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDO0FBQy9CLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUUxQix5REFBeUQ7QUFDekQsTUFBTSxhQUFhLEdBQUc7SUFDcEIsY0FBYztJQUNkLElBQUksRUFBRSx1QkFBdUI7SUFDN0IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0NBQ1YsQ0FBQztBQUVGLDZFQUE2RTtBQUM3RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQ3JDLFlBQVk7SUFDZCxLQUFLLENBQUMsU0FBUyxDQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxZQUFZO1NBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUM1QixDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCw2REFBNkQ7QUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRTtJQUN0QyxNQUFNLGFBQWEsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxZQUFZO0lBQ2QsS0FBSyxDQUFDLFNBQVMsQ0FDWCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQzlCLFlBQVk7UUFDZCxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDcEQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDRixZQUFZO0lBQ2hCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQ3BDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILDZFQUE2RTtBQUM3RSw0RUFBNEU7QUFDNUUsb0RBQW9EO0FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFDckMsK0RBQStEO0lBQzdELFlBQVk7SUFDWixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdkQsWUFBWTtRQUNWLEtBQUssQ0FBQyxXQUFXO1FBQ2pCLFlBQVk7UUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsT0FBTyxjQUFjLENBQUM7WUFDeEIsQ0FBQztZQUVDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZDLFlBQVk7Z0JBQ2QsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDMUMsbURBQW1EO29CQUNqRCxZQUFZO29CQUNkLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7d0JBQzFELE9BQU8sUUFBUSxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQyJ9