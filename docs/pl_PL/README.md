---
title: LSS-Manager V.4
lang: pl-PL
sidebarDepth: 2
---

# Wiki 🇵🇱 <Badge :text="'v' + $theme.variables.versions.short"/>

> Stabilny: <i>{{ $theme.variables.versions.stable }}</i>
> 
> Beta: <i>{{ $theme.variables.versions.beta }}</i>

<discord style="float: right;"><img src="https://discord.com/api/guilds/254167535446917120/embed.png?style=banner1" alt="Nasz serwer Discord: United Dispatch" data-prevent-zooming></discord>

[Game-Online-Status](https://stats.uptimerobot.com/OEKDJSpmvK)

<!-- Do NOT edit anything above this line! Any edits will be removed as content is auto generated! -->

## O nas

LSS MANAGER V.4 jest rozszerzeniem dla [www.operatorratunkowy.pl](https://www.operatorratunkowy.pl) oraz jego innych wersji językowe.

Dzięki temu rozszerzeniu do gry zostaje dodany sklep z aplikacjami, umożliwiający korzystanie z modułów. Możesz zdecydować, które moduły chcesz aktywować.

Dezaktywowane wtyczki nie są ładowane do Twojej przeglądarki, dla lepszej wydajności.


## Instalacja 📥
[Korzystając z LSSM zgadzasz się, na zbieranie metadanych.](metadata.md)

Tabelę, z którymi przeglądarkami LSSM jest kompatybilny, można znaleźć w naszym [FAQ](faq.md)

::: tip Korzystanie z LSSM na telefonach komórkowych
LSSM nie obsługuje telefonów komórkowych. Chociaż Firefox na urządzeniach mobilnych zezwala na dodatki, nie gwarantujemy funkcjonalności.

Obecnie **nie** planujemy oficjalnego wsparcia przeglądarek mobilnych.
:::

### Krok 1: Zainstaluj Tampermonkey
Zainstaluj rozszerzenie Tampermonkey w swojej przeglądarce.

<tampermonkey-download-table/>

W przypadku innych przeglądarek możesz pobrać Tampermonkey na [tampermonkey.net](https://www.tampermonkey.net/).

::: Uwaga!
Należy pamiętać, że oficjalnie nie wspieramy:
-starszych przeglądarek;
-przeglądarkek mobilnych;
-Microsoft Edge;
-Internet Explorer
:::

### Krok 2: Skrypt użytkownika
Jeśli Tampermonkey zostało pomyślnie zainstalowane w Twojej przeglądarce, możesz kliknąć <a :href="$theme.variables.server + 'lssm-v4.user.js'" target="_blank">tutaj</a> lub utworzyć nowy skrypt użytkownika o następującej treści:

@[code js](@userscript)

### Krok 3: Aktywacja
Wskaźnik LSSM to podświetlony na zielono tekst „LSSM V.4”, znajdujący się w prawym górnym rogu OperatoraRatunkowego.
Jeśli nie możesz znaleźć tego wskaźnika, kliknij ikonę tampermonkey w przeglądarce i sprawdź, czy przełącznik skryptu LSS-Manager jest ustawiony na `on`.

Jeśli masz jakiekolwiek problemy, skontaktuj się z nami [Wsparcie](support.md).
