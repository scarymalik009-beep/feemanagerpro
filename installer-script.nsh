!macro customHeader
  !system "echo 'School Fee Manager Pro Installer'"
!macroend

!macro preInit
  ; Set default installation directory to Program Files
  SetRegView 64
  WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "$PROGRAMFILES64\${PRODUCT_NAME}"
  SetRegView 32
!macroend

!macro customInit
  ; Custom initialization
  !insertmacro MUI_LANGDLL_DISPLAY
!macroend

!macro customInstall
  ; Create data directory in user's AppData
  CreateDirectory "$APPDATA\${PRODUCT_NAME}"
  
  ; Create shortcuts
  CreateShortCut "$DESKTOP\${PRODUCT_NAME}.lnk" "$INSTDIR\${PRODUCT_FILENAME}.exe"
  CreateDirectory "$SMPROGRAMS\${PRODUCT_NAME}"
  CreateShortCut "$SMPROGRAMS\${PRODUCT_NAME}\${PRODUCT_NAME}.lnk" "$INSTDIR\${PRODUCT_FILENAME}.exe"
  CreateShortCut "$SMPROGRAMS\${PRODUCT_NAME}\Uninstall ${PRODUCT_NAME}.lnk" "$INSTDIR\Uninstall ${PRODUCT_NAME}.exe"
  
  ; Register app
  WriteRegStr HKCU "Software\${PRODUCT_NAME}" "InstallLocation" "$INSTDIR"
  WriteRegStr HKCU "Software\${PRODUCT_NAME}" "Version" "${VERSION}"
!macroend

!macro customUnInstall
  ; Clean up
  Delete "$DESKTOP\${PRODUCT_NAME}.lnk"
  RMDir /r "$SMPROGRAMS\${PRODUCT_NAME}"
  
  ; Ask to remove data
  MessageBox MB_YESNO "Do you want to remove all application data including database?" IDNO skip_data
    RMDir /r "$APPDATA\${PRODUCT_NAME}"
  skip_data:
  
  DeleteRegKey HKCU "Software\${PRODUCT_NAME}"
!macroend
