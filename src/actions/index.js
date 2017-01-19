/**
 * Created by leichen on 2017/1/16.
 */
export const selectionLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
}