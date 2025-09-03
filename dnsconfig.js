// Meta settings:
var CF_PROXY_OFF = {"cloudflare_proxy": "off"};     // Proxy disabled.
var CF_PROXY_ON = {"cloudflare_proxy": "on"};       // Proxy enabled.

// Providers:
var REG_NONE = NewRegistrar("none");
var DNS_CLOUDFLARE = NewDnsProvider("cloudflare");

// Domains:
D("xavwe.dev", REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    DefaultTTL(1),
    A("@", "185.199.108.153", CF_PROXY_OFF), // GitHub Pages
    A("@", "185.199.109.153", CF_PROXY_OFF), // GitHub Pages
    A("@", "185.199.110.153", CF_PROXY_OFF), // GitHub Pages
    A("@", "185.199.111.153", CF_PROXY_OFF), // GitHub Pages
    AAAA("@", "2606:50c0:8000::153", CF_PROXY_OFF), // GitHub Pages
    AAAA("@", "2606:50c0:8001::153", CF_PROXY_OFF), // GitHub Pages
    AAAA("@", "2606:50c0:8002::153", CF_PROXY_OFF), // GitHub Pages
    AAAA("@", "2606:50c0:8003::153", CF_PROXY_OFF), // GitHub Pages
    CNAME("www", "xavwe.github.io."), // GitHub Pages
    MX("@", 60, "route2.mx.cloudflare.net."), // Cloudflare Email Routing
    MX("@", 98, "route3.mx.cloudflare.net."), // Cloudflare Email Routing
    MX("@", 99, "route1.mx.cloudflare.net."), // Cloudflare Email Routing
    TXT("@", '"v=spf1 include:_spf.mx.cloudflare.net ~all"'), // Cloudflare Email Routing
    TXT("cf2024-1._domainkey", '"v=DKIM1; h=sha256; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiweykoi+o48IOGuP7GR3X0MOExCUDY/BCRHoWBnh3rChl7WhdyCxW3jgq1daEjPPqoi7sJvdg5hEQVsgVRQP4DcnQDVjGMbASQtrY4WmB1VebF+RPJB2ECPsEDTpeiI5ZyUAwJaVX7r6bznU67g7LvFq35yIo4sdlmtZGV+i0H4cpYH9+3JJ78k" "m4KXwaf9xUJCWF6nxeD+qG6Fyruw1Qlbds2r85U9dkNDVAS3gioCvELryh1TxKGiVTkg4wqHTyHfWsp7KD3WQHYJn0RyfJJu6YEmL77zonn7p2SRMvTMP3ZEXibnC9gz3nnhR6wcYL8Q7zXypKTMD58bTixDSJwIDAQAB"'), // Cloudflare Email Routing
);
