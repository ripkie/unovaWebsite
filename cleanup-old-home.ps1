# Jalankan setelah copy/overwrite ZIP baru. Hanya lima file Home lama.
$projectRoot = $PSScriptRoot
if (-not (Test-Path (Join-Path $projectRoot "package.json"))) {
    throw "Tempatkan script di root project yang berisi package.json."
}
$legacyFiles = @(
    "src/components/contents/home/StatsSection.tsx",
    "src/components/contents/home/FeaturesSection.tsx",
    "src/components/contents/home/FeaturedProductSection.tsx",
    "src/components/contents/home/PartnersSection.tsx",
    "src/lib/data/home.ts"
)
foreach ($relativePath in $legacyFiles) {
    $legacyPath = Join-Path $projectRoot $relativePath
    if (Test-Path -LiteralPath $legacyPath -PathType Leaf) {
        Remove-Item -LiteralPath $legacyPath -Force
        Write-Host "Dihapus: $relativePath"
    }
}
Write-Host "Cleanup selesai. HeroSection dan HomeLayout baru tetap dipertahankan."
