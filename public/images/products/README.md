# Product image assets

The NOVA showcase expects five local product photographs in this directory:

- `nova-hub.jpg`
- `nova-air.jpg`
- `nova-sense.jpg`
- `nova-light.jpg`
- `nova-guard.jpg`

The application references these assets with root-relative `/images/products/...` paths so there is no runtime dependency on a remote image host.

Add the approved product photographs to this directory before the final production build. The repository's GitHub text-file connector cannot upload binary image files directly.
